<template>
  <section
    class="bg-[url('/statics/backgroundImage.jpg')] bg-cover bg-no-repeat"
  >
    <div class="flex flex-col justify-center items-center">
      <div
        class="w-11/12 sm:w-4/5 mt-[140px] sm:mt-[180px] flex flex-col gap-16"
      >
        <div class="flex flex-col gap-10">
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

          <div class="space-y-6">
            <h1
              class="text-4xl sm:text-[80px] tracking-tighter font-medium text-center leading-[40px] sm:leading-[80px]"
            >
              Modern analytics<br />
              for the modern world
            </h1>
            <p
              class="text-center text-sm sm:text-md text-customGray text-opacity-65"
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
        <div class="flex justify-center w-full">
          <img
            class="max-w-[960px] w-full shadow-custom rounded-xl sm:rounded-3xl mb-2"
            src="/statics/imageHeroBanner.png"
            alt="graphique"
          />
        </div>
      </div>
    </div>
  </section>
</template>
