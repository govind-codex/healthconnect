export type CancerUpdateStatus = 'Approved' | 'Clinical Trial' | 'Research' | 'Future Development';

export interface CancerResearchUpdate {
  id: string;
  title: string;
  description: string;
  status: CancerUpdateStatus;
  cancerType: string;
  date: string;
  source: string;
  sourceUrl: string;
  featured?: boolean;
}

export const cancerResearchUpdates: CancerResearchUpdate[] = [
  {
    id: 'v940-melanoma-2026',
    title: 'Personalized mRNA-based cancer vaccine research in melanoma',
    description:
      'A personalized neoantigen therapy is being studied with pembrolizumab for people with resected high-risk melanoma. It remains investigational and is being evaluated in ongoing trials.',
    status: 'Clinical Trial',
    cancerType: 'Melanoma',
    date: 'June 1, 2026',
    source: 'Merck / Moderna ASCO update',
    sourceUrl:
      'https://www.merck.com/news/moderna-and-merck-present-5-year-data-for-intismeran-autogene-in-combination-with-keytruda-pembrolizumab-in-patients-with-high-risk-stage-iii-iv-melanoma-following-complete-resection-at-the-20/',
    featured: true,
  },
  {
    id: 'who-hpv-vaccination',
    title: 'HPV vaccination remains a proven cancer prevention tool',
    description:
      'WHO describes HPV vaccination as a safe and effective way to reduce the risk of cervical cancer caused by high-risk HPV types, alongside screening.',
    status: 'Approved',
    cancerType: 'Cervical and other HPV-related cancers',
    date: 'Reviewed 2026',
    source: 'World Health Organization',
    sourceUrl: 'https://www.who.int/activities/immunizing-against-hpv/immunizing-against-hpv',
  },
  {
    id: 'fda-gardasil',
    title: 'FDA-approved HPV vaccine indications',
    description:
      'FDA-approved HPV vaccines help prevent certain diseases and cancers caused by HPV types included in the vaccine. Eligibility depends on age and local guidance.',
    status: 'Approved',
    cancerType: 'HPV-related cancers',
    date: 'April 2, 2025',
    source: 'U.S. FDA',
    sourceUrl: 'https://www.fda.gov/vaccines-blood-biologics/vaccines/gardasil',
  },
  {
    id: 'nci-treatment-vaccines',
    title: 'Treatment vaccines are different from prevention vaccines',
    description:
      'NCI explains that therapeutic cancer vaccines are designed for people who already have cancer, while preventive vaccines target cancer-causing infections.',
    status: 'Research',
    cancerType: 'Multiple cancer types',
    date: 'NCI overview',
    source: 'National Cancer Institute',
    sourceUrl: 'https://www.cancer.gov/about-cancer/treatment/types/immunotherapy/cancer-treatment-vaccines',
  },
  {
    id: 'nci-dna-vaccine-trials',
    title: 'DNA vaccine trials continue across selected cancers',
    description:
      'NCI lists active clinical studies evaluating DNA vaccine approaches in prostate, breast, ovarian, and HPV-related conditions.',
    status: 'Clinical Trial',
    cancerType: 'Multiple cancer types',
    date: 'Updated 2026',
    source: 'NCI Clinical Trials',
    sourceUrl: 'https://www.cancer.gov/research/participate/clinical-trials/intervention/dna-vaccine?pn=1',
  },
  {
    id: 'future-neoantigen-platforms',
    title: 'Future vaccine platforms may become more individualized',
    description:
      'Research is exploring tumor-specific vaccine targets and immune combinations, but future availability depends on clinical results and regulatory review.',
    status: 'Future Development',
    cancerType: 'Multiple cancer types',
    date: 'Research outlook',
    source: 'National Cancer Institute',
    sourceUrl: 'https://www.cancer.gov/about-cancer/treatment/types/immunotherapy/cancer-treatment-vaccines',
  },
];

export const featuredCancerResearchUpdate =
  cancerResearchUpdates.find((update) => update.featured) ?? cancerResearchUpdates[0];
