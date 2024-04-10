Page({
    data: {
      selectedUnitIndex: 0,
      inputValue: '',
      inputUnitIndex: 0,
      results: [],
      units: [
        { name: 'Year', value: 31536000 },
        { name: 'Month', value: 2628000 },
        { name: 'Day', value: 86400 },
        { name: 'Hour', value: 3600 },
        { name: 'Minute', value: 60 },
        { name: 'Second', value: 1 },
        { name: 'Millisecond', value: 0.001 }
      ],
      inputUnits: [
        { name: 'Year', value: 31536000 },
        { name: 'Month', value: 2628000 },
        { name: 'Day', value: 86400 },
        { name: 'Hour', value: 3600 },
        { name: 'Minute', value: 60 },
        { name: 'Second', value: 1 },
        { name: 'Millisecond', value: 0.001 }
      ]
    },
  
    onLoad() {},
  
    onInputEvent(event) {
      const value = event.detail.value;
      this.setData({
        inputValue: value
      });
      this.calculateResults();
    },
  
    onInputPickerChange(event) {
      const index = event.detail.value;
      this.setData({
        inputUnitIndex: index
      });
      this.calculateResults();
    },
  
    onPickerChange(event) {
      const index = event.detail.value;
      this.setData({
        selectedUnitIndex: index
      });
      this.calculateResults();
    },
  
    calculateResults() {
      const inputUnitValue = this.data.inputUnits[this.data.inputUnitIndex].value;
      const mainUnitValues = this.data.units.map((unit) => unit.value);
      const inputValue = parseFloat(this.data.inputValue || 0);
      const resultValues = [];
      for (let i = 0; i < mainUnitValues.length; i++) {
        const value = (inputValue * mainUnitValues[i]) / inputUnitValue;
        resultValues.push({
          name: this.data.units[i].name,
          value: Math.round(value * 1000) / 1000 // Round to three decimal places
        });
      }
      this.setData({
        results: resultValues
      });
    }
  });