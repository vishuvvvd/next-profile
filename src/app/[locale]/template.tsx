import * as motion from 'motion/react-client';

import { templateAnimationProps } from '@/constants/animation';

export default async function Template({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <motion.div {...templateAnimationProps}>
      {children}
    </motion.div>
  );
}
