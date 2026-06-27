import { SvgFillFrontendMentor } from '@/common/components/svgs/fill/frontend_mentor/frontend-mentor';
import { SvgFillGithub } from '@/common/components/svgs/fill/github/github';
import { SvgFillLinkedin } from '@/common/components/svgs/fill/linkedin/linkedin';
import { SvgFillTwitter } from '@/common/components/svgs/fill/twitter/twitter';
import { v4 } from 'uuid';

export class HomepageUiFct {
  public static readonly Svgs = [
    {
      Svg: SvgFillTwitter,
    },
    {
      Svg: SvgFillGithub,
    },
    {
      Svg: SvgFillLinkedin,
    },
    {
      Svg: SvgFillFrontendMentor,
    },
  ].map((el) => ({
    ...el,
    id: v4(),
  }));
}
