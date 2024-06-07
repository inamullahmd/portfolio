import { ArticleLayout } from "@/components/ArticleLayout";
import plot from '@/images/plots/heart-disease.png';
import Image from "next/image";
export const article = {
  author: 'Inamullah Mohammad',
  date: '2023-12-14',
  title: 'Prediction of heart disease',
  description: 'We developed and evaluated three machine learning models (Logistic Regression, Random Forest, MARS Model) for predicting heart disease using a dataset of over 319,000 health records. Despite high accuracy, we found issues with low specificity, leading to more false positives.',
  formattedDate: 'Dec 14, 2023',
  href: 'heart-disease-prediction'
}

export default function HeartDiseasePrediction() {
    return (
      <ArticleLayout article={article}>
        <div>
          <p>In this project, we aim to develop a machine learning-based classification model to predict the likelihood of heart disease in individuals based on various health-related factors. With a <a href="https://www.kaggle.com/datasets/vaisakhnair/heart-disease-data" target="_blank">dataset</a> of 319,795 observations, we will analyze key attributes that significantly impact the risk of heart disease. Our goal is to assist healthcare professionals in early diagnosis and preventive measures by providing a reliable prediction model. The dataset includes features such as BMI, smoking habits, alcohol consumption, and history of stroke, with the target variable being "HeartDisease," indicating the presence or absence of heart disease.</p>
          <Image src={plot} alt="Description of your image" />
          <p>The demographic analysis reveals varying age distributions among different races and sexes, highlighting the need for gender-specific approaches in managing heart disease. Physical activity's impact on BMI and heart disease risk underscores its importance in maintaining a healthy weight range, with reduced activity correlating to higher BMI and heart disease risk. Older age groups exhibit lower physical activity levels, potentially increasing heart disease risks. Analyses of physical activity across age and gender emphasize the importance of regular activity in preventing heart disease, particularly in older individuals. The prevalence of heart disease in individuals aged 60 and above highlights the need for targeted interventions in this age group. Additionally, the correlation between heart and kidney diseases underscores the importance of managing shared risk factors like hypertension and obesity.</p>
          <p>We meticulously followed a systematic methodology for predicting heart disease. Beginning with data preparation, we ensured the dataset's integrity by addressing missing values and encoding categorical variables appropriately. Feature engineering involved transforming raw data into a format suitable for modelling, including further encoding and scaling variables. Our model building phase incorporated <code>Logistic Regression</code>, <code>Random Forest</code>, and <code>MARS</code> models, each optimized and validated through a <code>5-fold cross-validation</code> strategy. These steps guarantee the accuracy and reliability of our model in predicting heart disease with precision.</p>
          
          <table className="text-xs">
            <thead>
              <tr>
                <th>Model</th>
                <th>Accuracy</th>
                <th>Sensitivity</th>
                <th>Specificity</th>
                <th>Positive Predictive Value</th>
                <th>Negative Predictive Value</th>
                <th>Balanced Accuracy</th>
                <th>Type-I Error</th>
                <th>Type-II Error</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Logistic Regression</td>
                <td>91.6</td>
                <td>99.2</td>
                <td>10.2</td>
                <td>92.2</td>
                <td>54.5</td>
                <td>54.7</td>
                <td>4913</td>
                <td>468</td>
              </tr>
              <tr>
                <td>Random Forest</td>
                <td>91.5</td>
                <td>99.23</td>
                <td>9.28</td>
                <td>92.12</td>
                <td>53.08</td>
                <td>54.26</td>
                <td>4966</td>
                <td>449</td>
              </tr>
              <tr>
                <td>MARS</td>
                <td>91.6</td>
                <td>99.82</td>
                <td>3.43</td>
                <td>91.7</td>
                <td>63.95</td>
                <td>51.63</td>
                <td>5286</td>
                <td>106</td>
              </tr>
            </tbody>
          </table>

          <p>In evaluating our models for predicting heart disease, we found that while the Logistic Regression model showed high accuracy and sensitivity, it struggled with specificity, indicating a tendency to misclassify healthy individuals. The Random Forest model exhibited similar patterns, with slightly lower accuracy but maintained high sensitivity. However, both models had relatively low specificity and high false-positive rates, suggesting room for improvement. The MARS model, while also accurate, suffered from poor specificity and a high false-positive rate, indicating a need for refinement. These findings underscore the importance of balancing sensitivity and specificity in predictive models to ensure accurate diagnoses and effective clinical decision-making in managing heart disease.</p>
          <p>To conclude, our project successfully developed and compared three machine learning models for predicting heart disease, achieving high accuracy and sensitivity. Logistic Regression demonstrated a strong balance of precision and recall, while Random Forest excelled with complex datasets despite specificity challenges. The MARS Model showed high sensitivity but potential overfitting. These findings underscore the importance of balancing sensitivity and specificity for accurate diagnoses.</p>
          
        </div>
      </ArticleLayout>
    )
  }