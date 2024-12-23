<script setup>
import { ref, computed } from "vue";



const emit = defineEmits();
const props = defineProps({
    defaultMin: {
        type: Number,
        required: true,
    },
    defaultMax: {
        type: Number,
        required: true,
    },
    max: {
        type: Number,
        default: 1000
    },
    min: {
        type: Number,
        default: 1
    }
});

const minValue = ref(props.defaultMin);
const maxValue = ref(props.defaultMax);

const updateRange = () => {
    emit("priceFilter", {
        minPrice: minValue.value,
        maxPrice: maxValue.value,
    });
};

const rangeStyle = computed(() => {
  return {
    '--min-value-width': `${
        (1 - ((minValue.value - 1) / (props.max / 2))) * 100
    }%`,
    '--min-value-left' : `${
        ((minValue.value - 1) / (props.max / 2)) * 100
    }%`,
    '--max-value-width': `${
        ((maxValue.value - (props.max / 2)) / (props.max / 2)) * 100
    }%`,
    '--max-value-right' : `${
        (1 - ((maxValue.value - (props.max / 2)) / (props.max / 2))) * 100
    }%`,
  };
});
</script>

<template>
  <div class="double-range-container">
    <input
      type="range"
      min="1"
      max="500"
      class="min-range"
      v-model="minValue"
      :style="rangeStyle"
      @input="updateRange"
    />
    <input
      type="range"
      min="500"
      max="1000"
      class="max-range"
      v-model="maxValue"
      :style="rangeStyle"
      @input="updateRange"
    />
  </div>
</template>
  

  
<style scoped>
.double-range-container {
    background-color: #DCDCDC;
    position: relative;
    height: 1vh;
    border-radius: 0.5vh;
}

input[type="range"] {
    appearance: none;
    -webkit-appearance: none;
    background-color: #DCDCDC;
    outline: none;
    z-index: 1;
}

input[type="range"]::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 2vh;
    height: 2vh;
    background: rgb(85, 85, 85);
    border-radius: 50%;
    cursor: pointer;
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.5);
    z-index: 3;
    opacity: 0;
}

input[type="range"]::-moz-range-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 2vh;
    height: 2vh;
    background: rgb(85, 85, 85);
    border-radius: 50%;
    cursor: pointer;
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.5);
    z-index: 3;
    opacity: 0;
}

.min-range {
    position: absolute;
    height: 100%;
    width: 50%;
    top: 0;
    left: 0;
    border-top-left-radius: 0.5vh;
    border-bottom-left-radius: 0.5vh;
}

.min-range::before {
    content: '';
    background-color: rgb(85, 85, 85);
    position: absolute;
    height: 100%;
    width: var(--min-value-width);
    top: 0;
    left: var(--min-value-left);
    border-top-left-radius: 0.5vh;
    border-bottom-left-radius: 0.5vh;
    z-index: 2;
}

.min-range::after {
    content: '';
    position: absolute;
    width: 2vh;
    height: 2vh;
    background: rgb(85, 85, 85);
    bottom: calc(100% - 1.5vh);
    left: calc(var(--min-value-left) - 1vh);
    border-radius: 50%;
    cursor: pointer;
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.5);
    z-index: 999;
}

.max-range {
    position: absolute;
    height: 100%;
    width: 50%;
    top: 0;
    right: 0;
    border-top-right-radius: 0.5vh;
    border-bottom-right-radius: 0.5vh;
}

.max-range::before {
    content: '';
    background-color: rgb(85, 85, 85);
    position: absolute;
    height: 100%;
    top: 0;
    width: var(--max-value-width);
    right: var(--max-value-right);
    border-top-right-radius: 0.5vh;
    border-bottom-right-radius: 0.5vh;
    z-index: 2;
}

.max-range::after {
    content: '';
    position: absolute;
    width: 2vh;
    height: 2vh;
    background: rgb(85, 85, 85);
    bottom: calc(100% - 1.5vh);
    right: var(--max-value-right);
    border-radius: 50%;
    cursor: pointer;
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.5);
    z-index: 999;
}
</style>
  