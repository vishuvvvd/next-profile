import Home from '@/components/home';
import AppLayoutWrapper from '@/components/layout-wrapper';
import { getUserMeData } from '@/services/main/me';

export default async function HomePage() {
  const data = await getUserMeData();

  return (
    <AppLayoutWrapper>
      <Home data={data} />
    </AppLayoutWrapper>
  );
}
