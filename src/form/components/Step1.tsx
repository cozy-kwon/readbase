import { Controller, useFormContext } from 'react-hook-form';
import styled from '@emotion/styled';

import { InputField, SelectField } from '@/components';
import { ReadingForm } from '@/form';
import { ReadingStatus, ReadingStatusLabelMap } from '@/models';

export function Step1() {
  const {
    control,
    formState: {
      errors,
    },
  } = useFormContext<ReadingForm>();

  return (
    <Wrapper>
      <Controller
        control={control}
        name="status"
        render={({ field }) => (
          <SelectField
            label="독서 상태"
            {...field}
            error={errors.status?.message}
          >
            { Object.values(ReadingStatus).map((status) => (
              <option key={status} value={status}>
                { ReadingStatusLabelMap[status] }
              </option>
            )) }
          </SelectField>
        )}
      />
      <Controller
        control={control}
        name="startAt"
        render={({ field }) => (
          <InputField
            type="date"
            label="시작일"
            {...field}
            value={field.value instanceof Date
              ? field.value.toISOString().split('T')[0]
              : field.value}
            onChange={e => {
              const val = e.target.value;
              field.onChange(val ? new Date(val) : undefined);
            }}
            error={errors.startAt?.message}
          />
        )}
      />
      <Controller
        control={control}
        name="finishedAt"
        render={({ field }) => (
          <InputField
            type="date"
            label="종료일"
            {...field}
            value={field.value instanceof Date
              ? field.value.toISOString().split('T')[0]
              : field.value}
            onChange={e => {
              const val = e.target.value;
              field.onChange(val ? new Date(val) : undefined);
            }}
            error={errors.finishedAt?.message}
          />
        )}
      />

    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
