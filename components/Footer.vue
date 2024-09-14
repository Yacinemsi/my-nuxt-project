<template>
  <footer class="text-white w-full">
    <div class="w-11/12 max-w-5xl mx-auto flex flex-col gap-6 pt-10 pb-4">
      <div class="flex flex-col md:flex-row gap-4 sm:gap-36">
        <!-- Contact + Careers -->
        <div class="flex flex-col gap-4">
          <div class="flex flex-col gap-1">
            <h4>Contact</h4>
            <ul>
              <li>
                Work inquires:
                <NuxtLink to="mailto:work@vaultflow.com">
                  work@vaultflow.com
                </NuxtLink>
              </li>
              <li>
                PR and speaking:
                <NuxtLink to="mailto:press@vaultflow.com">
                  press@vaultflow.com
                </NuxtLink>
              </li>
              <li>
                New business:
                <NuxtLink to="mailto:newbusiness@vaultflow.com">
                  newbusiness@vaultflow.com
                </NuxtLink>
              </li>
            </ul>
          </div>
          <div class="flex flex-col gap-1">
            <h4>Careers</h4>
            <NuxtLink to="mailto:careers@vaultflow.com"
              >Careers@vaultflow.com</NuxtLink
            >
          </div>
        </div>
        <!-- Address + Social -->
        <div class="flex flex-col gap-4">
          <div class="flex flex-col gap-1">
            <h4>Address</h4>
            <ul>
              <p>
                398 11th Street, Floor 2<br />
                San Francisco, CA 94103
              </p>
            </ul>
          </div>
          <div class="flex flex-col gap-1">
            <h4>Social</h4>
            <ul>
              <li>
                <NuxtLink to="#">Twitter</NuxtLink>
              </li>
              <li>
                <NuxtLink to="#">Instagram</NuxtLink>
              </li>
              <li>
                <NuxtLink to="#">Tiktok</NuxtLink>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="flex justify-between">
        <span class="text-[#939393] text-xs">
          © {{ new Date().getFullYear() }} Vaultflow. All Rights Reserved.
        </span>
        <img
          class="w-24"
          src="../statics/logos/logoVaultFlow.svg"
          alt="logoVaultFlow"
        />
      </div>
    </div>
  </footer>
</template>

<style scoped>
h4 {
  font-size: 16px;
  font-weight: 500;
  letter-spacing: -0.24px;
}
li,
p,
a {
  font-size: 14px;
  font-style: normal;
  font-weight: 200;
  line-height: normal;
  letter-spacing: -0.18px;
}
</style>
