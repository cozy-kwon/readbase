import { Controller, useFormContext } from 'react-hook-form';
import styled from '@emotion/styled';

import { SelectField } from '@/components';
import { ReadingForm } from '@/form';

export function Step5() {
  const {
    control,
    formState: { errors },
  } = useFormContext<ReadingForm>();

  return (
    <Wrapper>
      <Controller
        control={control}
        name="isPublic"
        render={({ field }) => (
          <SelectField
            label="공개 여부"
            {...field}
            value={field.value ? 'true' : 'false'}
            onChange={e => {
              field.onChange(e.target.value === 'true');
            }}
            error={errors.isPublic?.message}
          >
            <option value="true">공개</option>
            <option value="false">비공개</option>
          </SelectField>
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
