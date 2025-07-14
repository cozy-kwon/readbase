import { useRouter } from 'next/router';

import { Layout, Content } from '@/components';
import { READING_TOTAL_STEPS } from '@/constants';
import { useBook, useStep } from '@/hooks';

export default function BookFormPage() {
  const router = useRouter();
  const idFromQuery = router.query.id as string;
  const { step, goToStep } = useStep({
    pathname: `/book/${idFromQuery}`,
    totalSteps: READING_TOTAL_STEPS,
  });

  const { data: bookData, isLoading } = useBook(Number(idFromQuery));

  return (
    <Layout>
      <Content
        step={step}
        book={bookData}
        isLoading={isLoading}
        goToStep={goToStep}
      />
    </Layout>
  );
}
