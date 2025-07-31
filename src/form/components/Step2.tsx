import { Controller, useFormContext } from 'react-hook-form';
import styled from '@emotion/styled';

import { SelectField } from '@/components';
import { ReadingForm } from '@/form';

export function Step2() {
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
        name="isRecommended"
        render={({ field }) => (
          <SelectField
            label="도서 추천 여부"
            {...field}
            value={field.value ? 'true' : 'false'}
            onChange={(e) => {
              field.onChange(e.target.value === 'true');
            }}
            error={errors.isRecommended?.message}
          >
            <option value="true">추천함</option>
            <option value="false">추천하지 않음</option>
          </SelectField>
        )}
      />
      <Controller
        control={control}
        name="rating"
        render={({ field }) => (
          <SelectField
            label="별점"
            {...field}
            value={field.value.toString()}
            onChange={(e) => {
              field.onChange(Number(e.target.value));
            }}
            error={errors.rating?.message}
          >
            { Array.from({ length: 11 }, (_, i) => i * 0.5).map((rating) => (
              <option key={rating} value={rating}>
                { rating }점
              </option>
            )) }
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
