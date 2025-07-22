import { useRouter } from 'next/router';

import { Layout } from '@/components';
import { READING_TOTAL_STEPS } from '@/constants';
import { useStep } from '@/hooks';
import { BookFormContent } from '@/form';

export default function BookFormPage() {
  const router = useRouter();
  const idFromQuery = router.query.id as string;
  const { step, goToStep } = useStep({
    pathname: `/book/${idFromQuery}`,
    totalSteps: READING_TOTAL_STEPS,
  });

  if (idFromQuery == null) {
    return null;
  }
  return (
    <Layout>
      { step != null && (
        <BookFormContent
          id={Number(idFromQuery)}
          step={step}
          goToStep={goToStep}
        />
      ) }
    </Layout>
  );
}
