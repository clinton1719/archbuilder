export type FormData = {
  appScale: 'small' | 'medium' | 'large' | 'massive';
  responsiveness: string;
  availability: 'high' | 'veryHigh' | 'extremelyHigh';
  dataConsistency: 'eventual' | 'strong' | 'read';
  communication: 'synchronous' | 'asynchronous' | 'mixed';
  applicationComplexity: 'small' | 'growing' | 'large';
  frequencyOfChange: 'infrequent' | 'regular' | 'continuous';
  businessTransactionsComplexity: 'simple' | 'moderate' | 'complex';
  technologyStack: 'homogeneous' | 'polyglot';
  tolerance: 'low' | 'medium' | 'high';
  storage: 'sql' | 'nosql' | 'mixed';
};