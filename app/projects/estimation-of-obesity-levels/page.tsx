import { ArticleLayout } from "@/components/ArticleLayout";

export const article = {
  author: 'Inamullah Mohammad',
  date: '2024-05-06',
  title: 'Estimation of obesity levels based on eating habits and physical condition',
  description:
    'In our project, we estimated obesity levels using Logistic Regression, SVC, GB, RF, and MLP models, achieving 99.17% accuracy with SVM. We employed feature engineering, hyperparameter tuning, cross-validation, and feature importance tests to optimize and validate our models.',
  formattedDate: 'May 06, 2024',
  href: 'estimation-of-obesity-levels'
}

export default function EstimationOfObesityLevels() {
    return (
      <ArticleLayout article={article}>
        <div>
          <p>Obesity, defined by a BMI of 30 kg/m² or higher, has significantly increased globally, posing severe health risks. Machine learning enhances our understanding and prediction of obesity. Notably, studies using the UCI dataset demonstrate the effectiveness of various models. Buani and Nuraeni (2023) found the XGB Classifier to have a 96% accuracy in predicting obesity. Choudhuri (2022) achieved improved accuracy with hybrid models combining supervised and unsupervised learning. This research aids in early detection and personalized healthcare.</p>
          <p>The study uses a <a href="https://archive.ics.uci.edu/dataset/544/estimation+of+obesity+levels+based+on+eating+habits+and+physical+condition" target="_blank">dataset</a> from the UCI Machine Learning Repository, consisting of 2111 records and 17 attributes collected via a survey on eating habits and physical conditions. Due to class imbalance, synthetic data was generated using the <code>SMOTE filter</code>, making up 77% of the dataset. The target variable, <code>NObeyesdad</code> categorizes obesity levels, and the study aims to predict these levels using a multi-class classification approach.</p>
          
          <h4 className="font-semibold text-lg">Data Preparation</h4>
          <ul className="space-y-2">
            <li className="m-0">Incorrectly processed data from the <code>Weka</code> tool and <code>SMOTE</code> filter, where categorical variables were treated as continuous, was removed, leaving 513 rows of correct data.</li>
            <li>Class imbalances in obesity levels were addressed using <code>SMOTE-NC</code>, generating synthetic data to ensure balanced representation. This resulted in 2,009 records with equal rows for each class.</li>
            <li>Numerical columns (Age, Height, Weight) were standardized using <code>StandardScaler</code>, and categorical columns were numerically encoded using <code>LabelEncoder</code>.</li>
            <li>The correlation matrix revealed significant relationships between variables, aiding feature selection for improved model accuracy and robustness.</li>
          </ul>

          {/* <pre>
            <code>
from sklearn.preprocessing import LabelEncoder, StandardScaler
from imblearn.over_sampling import SMOTENC

# Load and preprocess your dataset
# df = ...

# Define feature matrix and target variable
# X, y = ...

# Define categorical feature indices
# categorical_indices = ...

# Apply SMOTENC to handle class imbalance
smotenc = SMOTENC(categorical_features=categorical_indices, random_state=42)
X_resampled, y_resampled = smotenc.fit_resample(X, y)

# Encode target variable if it is categorical
label_encoder = LabelEncoder()
y_resampled_encoded = label_encoder.fit_transform(y_resampled)

# Standardize numerical features
scaler = StandardScaler()
            </code>
          </pre> */}

          <p>In this project, we utilized methodologies adapted from previous research on multi-class classification of obesity. We began with feature selection using the <code>ANOVA F-test</code> to identify significant predictors, improving the efficiency and accuracy of our models. For predictive modeling, we employed <code>Logistic Regression</code> for its effectiveness in handling multiple categories, <code>Gradient Boosting</code> for incremental improvements and robust predictions, <code>Support Vector Machine</code> for high-dimensional spaces, <code>Random Forest</code> for high accuracy and ease of use, and <code>Multi-Layer Perceptron</code> for complex pattern recognition. </p>
          <p>We optimized our models using Cross Validation and Hyperparameter Tuning to enhance predictive power. Finally, we evaluated our models using performance metrics like <code>accuracy</code>, <code>recall</code>, <code>precision</code>, and <code>F1 score</code>, derived from the confusion matrix. These methodologies guided our application of machine learning techniques, ensuring effective analysis and understanding of obesity factors.</p>
          <table>
            <thead>
              <tr>
                <th>Model</th>
                <th>Accuracy</th>
                <th>Precision</th>
                <th>Recall</th>
                <th>F1 Score</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Logistic Regression</td>
                <td>98.01</td>
                <td>98.04</td>
                <td>98.01</td>
                <td>98.00</td>
              </tr>
              <tr>
                <td>Support Vector Machine</td>
                <td>99.17</td>
                <td>99.18</td>
                <td>99.17</td>
                <td>99.17</td>
              </tr>
              <tr>
                <td>Gradient Boost</td>
                <td>96.85</td>
                <td>96.85</td>
                <td>96.85</td>
                <td>96.84</td>
              </tr>
              <tr>
                <td>Random Forest</td>
                <td>95.36</td>
                <td>95.42</td>
                <td>95.36</td>
                <td>95.34</td>
              </tr>
              <tr>
                <td>Multi-Layered Perceptron</td>
                <td>98.18</td>
                <td>98.21</td>
                <td>98.18</td>
                <td>98.17</td>
              </tr>
            </tbody>
          </table>
          <p>Our research on predicting obesity levels using machine learning models, including <code>Logistic Regression</code>, <code>SVM</code>, <code>Gradient Boost</code>, <code>Random Forest</code>, and <code>MLP</code>, revealed significant insights into the impact of features like family history and dietary habits. SVM performed exceptionally well, achieving about 99.17% in metrics like <code>accuracy</code>, <code>precision</code>, <code>recall</code>, and the <code>F1 score</code>. These findings highlight the potential of machine learning in improving healthcare interventions for obesity, although further validation and improvement of models are warranted.</p>
        </div>
      </ArticleLayout>
    )
  }