import { Controller, useFormContext } from 'react-hook-form';
import styled from '@emotion/styled';

import { TextareaField } from '@/components';
import { ReadingForm } from '@/form';

export function Step3() {
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
        name="review"
        render={({ field }) => (
          <TextareaField
            label="독후감"
            placeholder="독후감을 작성해 주세요."
            {...field}
            error={errors.review?.message}
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
