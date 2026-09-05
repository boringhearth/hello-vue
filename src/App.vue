<script setup>
import { ref } from 'vue';

const fonts = [
    'ui-sans-serif, system-ui, sans-serif',
    'ui-serif, Georgia, serif',
    'ui-monospace, "Courier New", monospace',
    'cursive',
    'fantasy',
];

const weights = [200, 300, 400, 600, 700, 900];
const styles = ['normal', 'italic'];

// pick a random item out of any array
const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];

const font = ref({});
const clicks = ref(0);

function randomize() {
    clicks.value++;
    font.value = {
        fontFamily: pick(fonts),
        fontWeight: pick(weights),
        fontStyle: pick(styles),
        letterSpacing: `${(Math.random() * 0.6 - 0.1).toFixed(3)}em`,
        transform: `rotate(${(Math.random() * 10 - 5).toFixed(1)}deg)`,
        color: `hsl(${Math.floor(Math.random() * 360)} 70% 45%)`,
    };
}
</script>

<template>
    <!-- the clickable surface is the whole viewport -->
    <div
        class="flex min-h-screen cursor-pointer select-none flex-col items-center justify-center gap-6 bg-white"
        @click="randomize"
    >
        <h1 class="text-6xl transition-all duration-150" :style="font">
            helloWorld
        </h1>

        <p class="text-sm text-slate-400">
            {{ clicks === 0 ? 'click anywhere' : `${clicks} clicks` }}
        </p>
    </div>
</template>
