export interface Article {
  title: string
  description: string
  author: string
  date: string
  formattedDate: string
  href: string
}

export const articles: Article[] = [
  {
    author: 'Inamullah Mohammad',
    date: '2024-05-13',
    formattedDate: 'May 13, 2024',
    title: 'Enhanced indexing strategies for SQLite: Implementation and Evaluation',
    description:
      'We implemented and evaluated Generalized Inverted Index (GIN) and Block Range Index (BRIN) in SQLite, aiming to enhance query performance for large datasets. Our tests showed that while BRIN indexing significantly outperforms other methods in querying time, the use of GIN should be carefully considered due to its substantial setup and querying overhead in SQLite environments.',
    href: 'enhanced-indexing-strategies'
    },
  {
    author: 'Inamullah Mohammad',
    date: '2024-05-06',
    formattedDate: 'May 06, 2024',
    title: 'Estimation of obesity levels based on eating habits and physical condition',
    description:
      'In our project, we estimated obesity levels using Logistic Regression, SVC, GB, RF, and MLP models, achieving 99.17% accuracy with SVM. We employed feature engineering, hyperparameter tuning, cross-validation, and feature importance tests to optimize and validate our models.',
    href: 'estimation-of-obesity-levels'
  },
  {
    author: 'Inamullah Mohammad',
    date: '2023-12-14',
    formattedDate: 'Dec 14, 2023',
    title: 'Prediction of heart disease',
    description: 'We developed and evaluated three machine learning models (Logistic Regression, Random Forest, MARS Model) for predicting heart disease using a dataset of over 319,000 health records. Despite high accuracy, we found issues with low specificity, leading to more false positives.',
    href: 'heart-disease-prediction'
  },
  {
    author: 'Inamullah Mohammad',
    date: '2023-05-12',
    formattedDate: 'May 12, 2023',
    title: 'Predicting Possible Loan Default Using Machine Learning',
    description: 'In this project, we aimed to predict loan defaults using supervised learning algorithms such as decision trees, random forests, logistic regression, and KNN. Leveraging a dataset from Kaggle, we implemented these algorithms in Python without external libraries. By preprocessing the data, handling categorical variables, and addressing imbalance, we trained and evaluated these models to identify potential loan defaulters and mitigate risks for financial institutions.',
    href: 'loan-default-prediction'
  },
  {
    author: 'Inamullah Mohammad',
    date: '2023-03-22',
    formattedDate: 'Mar 22, 2023',
    title: 'Using RL to create an agent for Tic-Tac-Toe',
    description:
      'In our project, we aim to implement Q-Learning, SARSA, and Dynamic Programming algorithms for Tic Tac Toe. Our goal is to train an agent to play effectively against human opponents. We explore the game&lsquo;s history, its relevance in AI, and compare the performance of the implemented algorithms.',
    href: 'tic-tac-toe'
  }
];

// export async function getAllArticles() {
//   return articles.sort((a, z) => +new Date(z.date) - +new Date(a.date))
// }


export async function getRecentArticles() {

  articles.sort((a, z) => +new Date(z.date) - +new Date(a.date))
  // Get the first three articles
  let recentArticles = articles.slice(0, 3);
  return recentArticles;
}
