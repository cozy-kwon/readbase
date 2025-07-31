import { Controller, useFormContext, useFieldArray } from 'react-hook-form';
import styled from '@emotion/styled';

import { NumberInputField } from '@/components';
import { ReadingForm } from '@/form';

export function Step4() {
  const {
    control,
    watch,
    formState: {
      errors,
    },
  } = useFormContext<ReadingForm>();

  const totalPages = watch('totalPages');

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'quotePageNumbers',
  });

  const addQuote = () => {
    append({ pageNumber: undefined });
  };

  const removeQuote = (index: number) => {
    remove(index);
  };

  return (
    <Wrapper>
      <Title>인용구</Title>
      { fields.map((field, index) => (
        <QuoteItem key={field.id}>
          <QuoteHeader>
            <QuoteLabel>인용구 { index + 1 }</QuoteLabel>
            { fields.length > 1 && (
              <RemoveButton type="button" onClick={() => removeQuote(index)}>
                삭제
              </RemoveButton>
            ) }
          </QuoteHeader>
          <Controller
            control={control}
            name={`quotePageNumbers.${index}.pageNumber`}
            render={({ field }) => (
              <NumberInputField
                label="페이지 번호"
                placeholder={`1부터 ${totalPages}까지의 숫자를 입력하세요.`}
                min={1}
                max={totalPages}
                {...field}
                value={field.value || ''}
                onChange={e => {
                  const val = e.target.value;
                  field.onChange(val ? Number(val) : undefined);
                }}
                error={errors.quotePageNumbers?.[index]?.pageNumber?.message}
              />
            )}
          />
        </QuoteItem>
      )) }

      <AddButton type="button" onClick={addQuote}>
        인용구 추가
      </AddButton>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Title = styled.h3`
  margin: 0;
  font-size: 16px;
  font-weight: 600;
`;

const QuoteItem = styled.div`
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 16px;
  background: #fafafa;
`;

const QuoteHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
`;

const QuoteLabel = styled.span`
  font-weight: 600;
  font-size: 14px;
`;

const RemoveButton = styled.button`
  background: #ff4444;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 4px 8px;
  font-size: 12px;
  cursor: pointer;

  &:hover {
    background: #cc3333;
  }
`;

const AddButton = styled.button`
  background: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 12px 16px;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    background: #0056b3;
  }
`;
