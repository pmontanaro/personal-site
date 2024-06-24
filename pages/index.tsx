// import { Page } from '@';
import { GetStaticProps } from 'next';
import { Page } from '@/components/shared/Page/Page';


// type HomeProps = {
//   textBlocks: TextBlock[];
// };


export default function Home() {
  return (
    <Page>
      {/* <TextBlob textBlocks={textBlocks} /> */}
      Hello this is peter
    </Page>
  );
}