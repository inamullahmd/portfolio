

import { ArticleLayout } from "@/components/ArticleLayout";
import plot from '@/images/plots/loan-default-class-imbalance.png';
import Image from "next/image";

export const article = {
  author: 'Inamullah Mohammad',
  date: '2023-03-22',
  title: 'Using RL to create an agent for Tic-Tac-Toe',
  description:
    'In our project, we aim to implement Q-Learning, SARSA, and Dynamic Programming algorithms for Tic Tac Toe. Our goal is to train an agent to play effectively against human opponents. We explore the game&lsquo;s history, its relevance in AI, and compare the performance of the implemented algorithms.',
  formattedDate: 'Mar 22, 2023',
  href: 'tic-tac-toe'
}

export default function TicTacToeRL() {
  return (
    <ArticleLayout article={article}>
      <div>
      <p>In this project, we address the challenge of creating an autonomous agent to play Tic-Tac-Toe effectively against human opponents. Tic-Tac-Toe, a simple yet strategically rich game, provides an ideal environment for exploring and implementing reinforcement learning (RL) algorithms. Our goal is to develop and compare the performance of two RL algorithms, <code>Q-Learning</code> and <code>SARSA</code>, in training an agent to play Tic-Tac-Toe optimally. Additionally, we incorporate <code>Dynamic Programming</code>, leveraging its ability to handle the game's finite state and action space efficiently.</p>

<p>The project's foundation lies in the historical evolution of Tic-Tac-Toe, tracing its origins from ancient Egypt to its modern-day adaptation as a popular testbed for AI and machine learning algorithms. The game's straightforward rules and well-defined state space make it an attractive domain for studying and implementing various AI techniques.</p>

<p>Our implementation of Q-Learning and SARSA involves training an agent to make optimal moves based on the current game state. <code>Q-Learning</code>, an off-policy algorithm, learns the optimal action-value function by selecting actions that maximize expected rewards. <code>SARSA</code>, an on-policy algorithm, updates the action-value function based on the next state-action pair chosen by the current policy. By comparing the performance of these algorithms, we aim to gain insights into their strengths and weaknesses in the context of Tic-Tac-Toe.</p>

<p><code>Dynamic Programming</code>, specifically the Min-Max algorithm, plays a crucial role in our project by calculating the optimal move for the agent based on the current board state. This algorithm considers the opponent's best response, making it well-suited for two-player games like Tic-Tac-Toe. We integrate this approach to provide a benchmark for comparing against the RL algorithms, offering a holistic view of different learning methods in this game.</p>

<p>Our evaluation focuses on several key metrics, including convergence speed, learning rate impact, and overall performance against human players. We hypothesize that <code>Q-Learning</code> will outperform <code>SARSA</code> in convergence speed, given its off-policy nature, while a lower learning rate will be more suitable for both algorithms in the context of Tic-Tac-Toe. Additionally, we expect <code>Dynamic Programming</code> to outperform the RL algorithms against an optimal opponent due to its explicit consideration of the opponent's strategy.</p>

<p>In conclusion, our project contributes to the broader understanding of RL algorithms in the context of board games like Tic-Tac-Toe. By implementing and comparing <code>Q-Learning</code>, <code>SARSA</code>, and <code>Dynamic Programming</code>, we provide valuable insights into their effectiveness and limitations. Future work could focus on enhancing the RL algorithms' performance through advanced techniques and exploring their application in more complex board games.</p>  
      </div>
    </ArticleLayout>
  )
}