Page({
    data: {
      height: '',
      weight: '',
      bmiValue: '',
      showResult: false,
      healthAssessment: ''
    },
    onLoad() {},
    // Handle input changes for height and weight fields
    onHeightInput(e) {
      this.setData({ height: e.detail.value });
    },
    onWeightInput(e) {
      this.setData({ weight: e.detail.value });
    },
    calculateBmi() {
      const height = parseFloat(this.data.height);
      const weight = parseFloat(this.data.weight);
  
      if (!height || !weight) return;
      
      this.setData({
        showResult: true
      });
  
      const bmi = weight / Math.pow(height / 100, 2);
      const roundedBmi = Number(parseFloat(bmi).toFixed(2));
      let healthAssessment;
  
      switch (true) {
        case roundedBmi < 18.5:
          healthAssessment = '过轻';
          break;
        case roundedBmi >= 18.5 && roundedBmi <= 23.9:
          healthAssessment = '正常';
          break;
        case roundedBmi > 24 && roundedBmi <= 27.9:
          healthAssessment = ' övergewichtig';
          break;
        default:
          healthAssessment = '肥胖';
      }
  
      this.setData({
        bmiValue: roundedBmi,
        healthAssessment: `${roundedBmi} (${healthAssessment})`
      });
    }
  });