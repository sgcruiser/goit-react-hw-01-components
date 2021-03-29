import React from 'react';

import StatisticsList from './StatisticsList/StatisticsList';

import statisticalData from '../../data/statistical-data.json';

import styles from './Statistics.module.css';

<Statistics title="Upload stats" stats={statisticalData} />;
<Statistics stats={statisticalData} />;

const Statistics = () => {
  return (
    <section class="statistics">
      <h2 class="title">Upload stats</h2>

      <ul class="stat-list">
        <li class="item">
          <span class="label">.docx</span>
          <span class="percentage">4%</span>
        </li>
        <li class="item">
          <span class="label">.mp3</span>
          <span class="percentage">14%</span>
        </li>
        <li class="item">
          <span class="label">.pdf</span>
          <span class="percentage">41%</span>
        </li>
        <li class="item">
          <span class="label">.mp4</span>
          <span class="percentage">12%</span>
        </li>
      </ul>

      {/* <div className={styles.profile}>
        <Description
          name={user.name}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
        />
        <StatisticsList stats={user.stats} />
      </div> */}
    </section>
  );
};

export default Statistics;
