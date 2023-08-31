import noUiSlider from 'nouislider';

const rangeSlider = document.getElementById('range-slider');

if(rangeSlider) {
  noUiSlider.create(rangeSlider, {
    start: [279, 1978],
    connect: true,
    step: 1,
    range: {
      'min': [0],
      'max': [2000]
    }
  });

  const rangeMin = document.getElementById('range-min');
  const rangeMax = document.getElementById('range-max');
  const ranges = [rangeMin, rangeMax];

  rangeSlider.noUiSlider.on('update', function(values, handle) {
    ranges[handle].value = Math.round(values[handle]);

    // let inputsValue = `${ranges[handle].value + '$'}`;

    // собственно цифры value в инпуте
    // console.log(inputsValue.replace(/(\d)(?=(\d{3})+(\D|$))/g, '1 '));
  });

  const setRangeSlider = (i, value) => {
    let arr = [null, null];
    arr[i] = value;

    rangeSlider.noUiSlider.set(arr);
  };

  ranges.forEach((el, index) => {
    el.addEventListener('change', (e) => {
      setRangeSlider(index, e.currentTarget.value);
    });
  })
}



