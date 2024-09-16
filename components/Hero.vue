<template>
  <section
    class="bg-[url('/statics/backgroundImage.jpg')] bg-cover bg-center bg-no-repeat"
  >
    <div class="flex flex-col justify-center items-center">
      <div
        class="w-11/12 sm:w-4/5 mt-[140px] sm:mt-[180px] flex flex-col gap-16"
      >
        <div class="flex flex-col gap-8">
          <div class="flex justify-center">
            <CtaButton
              bgColor="bg-transparent"
              textColor="text-white"
              hoverBgGradient="before:bg-gradient-to-r before:from-white before:to-white"
              hoverTextColor="hover:text-violet"
            >
              We just raised $20M in Series B. Learn more
            </CtaButton>
          </div>

          <div class="relative flex flex-col gap-6 justify-center">
            <h1
              data-text="Modern analytics for the modern world"
              class="text-5xl text-white sm:text-[80px] tracking-tighter font-medium text-center leading-[40px] sm:leading-[80px]"
            >
              Modern analytics for the modern world
            </h1>
            <p
              class="text-center inline-block align-baseline text-sm sm:text-md text-customGray text-opacity-65"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br />
              Suspendisse varius enim in eros elementum tristique.
            </p>
          </div>

          <div class="flex justify-center gap-4">
            <CtaButton> Download the app </CtaButton>
            <CtaButton
              bgColor="bg-transparent"
              textColor="text-white"
              hoverBgGradient="before:bg-gradient-to-r before:from-white before:to-white"
              hoverTextColor="hover:text-violet"
            >
              Talk to an expert
            </CtaButton>
          </div>
        </div>
        <div
          class="animated-border-image flex justify-center max-w-[960px] w-full rounded-xl relative p-1 mx-auto"
        >
          <img
            class="max-w-[960px] w-full shadow-custom bg-violet rounded-lg block relative z-1"
            src="/statics/imageHeroBanner.png"
            alt="graphique"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
h1 {
  animation: glitch 3s infinite;
}

h1::before,
h1::after {
  content: attr(data-text);
  position: absolute;
  top: 0;
  color: white;
  overflow: hidden;
  clip: rect(0, 900px, 0, 0);
  animation: glitch 2s infinite;
}
h1::before {
  left: 2px;
  text-shadow: -2px 0 #313198;
  animation-duration: 1.5s;
}
h1::after {
  left: -2px;
  text-shadow: -2px 0 #ce18a4;
  animation-duration: 1.2s;
}
@media (width > 1800px) {
  h1::before,
  h1::after {
    left: 0;
    right: 0;
    margin: 0 auto;
  }
}

@keyframes glitch {
  0% {
    clip: rect(42px, 9999px, 44px, 0);
    transform: skew(0.4deg);
  }
  20% {
    clip: rect(15px, 9999px, 56px, 0);
    transform: skew(0.3deg);
  }
  40% {
    clip: rect(85px, 9999px, 140px, 0);
    transform: skew(0.5deg);
  }
  60% {
    clip: rect(35px, 9999px, 90px, 0);
    transform: skew(0.6deg);
  }
  80% {
    clip: rect(42px, 9999px, 44px, 0);
    transform: skew(0.4deg);
  }
  100% {
    clip: rect(15px, 9999px, 56px, 0);
    transform: skew(0.3deg);
  }
}

.animated-border-image {
  background: linear-gradient(115deg, #591ddc, #9524c9, #c924ab);
  background-size: 200% 200%;
  animation: move-border 1s ease infinite;
}

@keyframes move-border {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
</style>
