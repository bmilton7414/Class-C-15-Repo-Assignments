class Statistics {
    constructor(sample) {
      this.sample = sample;
    }
  
    count() {
      return this.sample.length;
    }
  
    sum() {
      return this.sample.reduce((acc, curr) => acc + curr, 0);
    }
  
    min() {
      return Math.min(...this.sample);
    }
  
    max() {
      return Math.max(...this.sample);
    }
  
    range() {
      return this.max() - this.min();
    }
  
    mean() {
      return this.sum() / this.count();
    }
  
    median() {
      const sorted = [...this.sample].sort((a, b) => a - b);
      const mid = Math.floor(sorted.length / 2);
      return sorted.length % 2 === 0
        ? (sorted[mid - 1] + sorted[mid]) / 2
        : sorted[mid];
    }
  
    mode() {
      const freq = {};
      this.sample.forEach((num) => {
        freq[num] = (freq[num] || 0) + 1;
      });
      let maxCount = 0;
      let mode = null;
      for (const num in freq) {
        if (freq[num] > maxCount) {
          maxCount = freq[num];
          mode = num;
        }
      }
      return { mode: Number(mode), count: maxCount };
    }
  
    variance() {
      const mean = this.mean();
      const squareDiffs = this.sample.map((num) => Math.pow(num - mean, 2));
      return squareDiffs.reduce((acc, curr) => acc + curr, 0) / this.count();
    }
  
    std() {
      return Math.sqrt(this.variance());
    }
  
    freqDist() {
      const freq = {};
      this.sample.forEach((num) => {
        freq[num] = (freq[num] || 0) + 1;
      });
      const dist = [];
      for (const num in freq) {
        dist.push([((freq[num] / this.count()) * 100).toFixed(1), Number(num)]);
      }
      return dist.sort((a, b) => b[0] - a[0]);
    }
  
    describe() {
      return `
      Count: ${this.count()}
      Sum: ${this.sum()}
      Min: ${this.min()}
      Max: ${this.max()}
      Range: ${this.range()}
      Mean: ${this.mean().toFixed(1)}
      Median: ${this.median()}
      Mode: ${this.mode().mode}, Count: ${this.mode().count}
      Variance: ${this.variance().toFixed(1)}
      Standard Deviation: ${this.std().toFixed(1)}
      Frequency Distribution: ${JSON.stringify(this.freqDist())}
      `;
    }
  }
  
  // Example usage:
  const ages = [
    31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37,
    31, 34, 24, 33, 29, 26,
  ];
  
  const statistics = new Statistics(ages);
  
  console.log(statistics.describe());
  




// Create a class called PersonAccount. It has firstname, lastname, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is also a set of expenses and its description.