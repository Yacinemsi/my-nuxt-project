<template>
  <section class="w-full space-y-16 bg-title">
    <div
      class="px-8 sm:px-0 mx-auto flex flex-col gap-6 justify-center items-center"
    >
      <h2
        class="text-customGray bg-[url('/statics/background-title.png')] bg-contain bg-center bg-no-repeat w-full max-w-xs text-2xl sm:text-5xl text-center tracking-tighter font-medium leading-tight"
      >
        Features that work for your future.
      </h2>
      <p class="text-customGray text-sm text-center max-w-sm w-full">
        Check out our amazing features and experience the power of Vaultflow for
        yourself.
      </p>
    </div>
    <div class="flex flex-col justify-center items-center gap-6 sm:gap-10">
      <div class="flex flex-col sm:flex-row w-11/12 max-w-5xl gap-6 mx-auto">
        <CardsFeatures
          logo="/_nuxt/statics/logos/iconAnalytics.png"
          link="#analytics"
        >
          <template #title>Analytics Dashboard</template>
          <template #description
            >Our Analytics Dashboard provides a clear and intuitive interface
            for you to easily analyze your data. From customizable graphs to
            real-time data updates, our dashboard offers everything you need to
            gain valuable insights.</template
          >
          <template #link>View dashboard</template>
        </CardsFeatures>

        <CardsFeatures
          logo="/_nuxt/statics/logos/iconDigital.png"
          link="#digital"
        >
          <template #title>Digital Credit Tokens</template>
          <template #description
            >Reward your customers and incentivize engagement with our
            innovative digital credit tokens. Our tokens can be customized to
            match your branding, and are a flexible and scalable way to drive
            customer loyalty and encourage repeat business.</template
          >
          <template #link>View tokens</template>
        </CardsFeatures>
      </div>
      <div class="w-11/12 max-w-5xl">
        <CardsFeatures
          logo="/_nuxt/statics/logos/iconCode.png"
          link="#code"
          extraImage="/_nuxt/statics/imageDigitalToken.png"
          width="sm:w-1/2"
        >
          <template #title>Code collaboration</template>
          <template #description
            >Our advanced code synchronization technology ensures that your data
            is always up-to-date and accurate, no matter where it's coming from.
            Whether you're integrating data from multiple sources or working
            with a team of developers, our synchronization technology makes it
            easy to collaborate and ensure that your data is consistent and
            reliable.</template
          >
          <template #link>View code collaboration</template>
        </CardsFeatures>
      </div>
    </div>
  </section>
</template>
