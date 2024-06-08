
import { ArticleLayout } from "@/components/ArticleLayout";
import { type Article } from "@/lib/articles";

export const article: Article = {
  author: 'Inamullah Mohammad',
  date: '2023-05-12',
  title: 'Predicting Possible Loan Default Using Machine Learning',
  description: 'In this project, we aimed to predict loan defaults using supervised learning algorithms such as decision trees, random forests, logistic regression, and KNN. Leveraging a dataset from Kaggle, we implemented these algorithms in Python without external libraries. By preprocessing the data, handling categorical variables, and addressing imbalance, we trained and evaluated these models to identify potential loan defaulters and mitigate risks for financial institutions.',
  formattedDate: 'May 12, 2023',
  href: 'loan-default-prediction'
}

export default function LoanDefaultPrediction() {
  return (
    <ArticleLayout article={article}>
      <div>
        <p>In this project, we tackle the critical issue of predicting loan defaults using supervised learning algorithms. Loan default poses significant risks to financial institutions, leading to financial losses and other negative impacts. To mitigate these risks, we explore the effectiveness of <code>decision trees</code>, <code>random forests</code>, <code>logistic regression</code>, and <code>KNN</code> in predicting loan defaults. We utilize a dataset from Kaggle and implement these algorithms in <code>Python</code> without external libraries.</p>
        <p>The dataset contains general attributes of individuals, such as income, age, marital status, and others, with a total of 252k examples, of which 12.3% are labeled as defaulters. We preprocess the data by handling categorical variables, ensuring no missing or invalid data, and standardizing features. To address the imbalance in the dataset, we use the <code>RandomOverSampler</code> method and sample 10k records using <code>stratified sampling</code> for computational efficiency.</p>
        <img src="../images/plots/loan-default-class-imbalance.png" alt="Description of your image" />
        <p><code>Logistic regression</code>, a statistical method for analyzing datasets with one or more independent variables, is implemented using gradient descent to estimate parameters. <code>Decision trees</code> are used to recursively split data based on attributes, and we use the information gain criterion for splitting nodes. <code>KNN</code>, a non-parametric ML algorithm, finds the K nearest neighbors to a new data point to predict its class. <code>Random forests</code>, an ensemble method, aggregate results from multiple decision trees to reduce overfitting and improve accuracy.</p>
        <p>Our evaluation focuses on metrics such as <code>ROC AUC score</code>, <code>F1 score</code>, and <code>prediction time</code>. We hypothesize that tree-based models will outperform linear models due to their ability to capture non-linear relationships. We find that <code>Random Forest</code> performs best among the models, achieving higher <code>ROC AUC</code> and <code>F1</code> scores. However, <code>KNN</code> operates slower than other models due to its higher prediction time complexity.</p>
        
        <table>
          <thead>
            <tr>
              <th>Algorithm</th>
              <th>Accuracy</th>
              <th>ROC AUC</th>
              <th>Precision</th>
              <th>Recall</th>
              <th>F1-Score</th>
              <th>Log Loss</th>
              <th>Prediction Time</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Logistic Regression</td>
              <td>0.6115</td>
              <td>0.6121</td>
              <td>0.6298</td>
              <td>0.5888</td>
              <td>0.6085</td>
              <td>14</td>
              <td>0.021s</td>
            </tr>
            <tr>
              <td>Decision Tree</td>
              <td>0.6705</td>
              <td>0.67</td>
              <td>0.6759</td>
              <td>0.6871</td>
              <td>0.6815</td>
              <td>11.876</td>
              <td>0.009s</td>
            </tr>
            <tr>
              <td>KNN</td>
              <td>0.6545</td>
              <td>0.6532</td>
              <td>0.6515</td>
              <td>0.7017</td>
              <td>0.6757</td>
              <td>12.45</td>
              <td>86.7s</td>
            </tr>
            <tr>
              <td>Random Forest</td>
              <td>0.667</td>
              <td>0.6653</td>
              <td>0.6579</td>
              <td>0.731</td>
              <td>0.6928</td>
              <td>12</td>
              <td>0.035s</td>
            </tr>
          </tbody>
        </table>


        <p>In conclusion, our project demonstrates the effectiveness of machine learning algorithms in predicting loan defaults. Future work could include automating hyperparameter tuning, experimenting with other ensemble methods, creating visualizations of decision boundaries, and creating new features to improve model performance.</p>  
      </div>
    </ArticleLayout>
  )
}