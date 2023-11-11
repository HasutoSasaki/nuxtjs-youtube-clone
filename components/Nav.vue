<script setup>

const openSideNav = ref(true)
</script>

<template>
    <div>
        <div id="SideNav" class="h-[100%] fixed z-0 bg-black w-[240px]" :class="[!openSideNav ? 'w-[70px]' : 'w-[240px]']">
            <ul :class="[!openSideNav ? 'w-[70px]' : 'w-[240px]']" class="mt-[60px] w-full">
                <div v-if="openSideNav">
                    <SideNavItem :openSideNav="true" iconString="Home" />
                    <SideNavItem :openSideNav="true" iconString="registeredChannels" />
                    <div class="border-b border-b-gray-700 my-2.5"></div>
                    <SideNavItem :openSideNav="true" iconString="myChannel" />
                    <SideNavItem :openSideNav="true" iconString="History" />
                    <SideNavItem :openSideNav="true" iconString="VideoCreated" />
                    <SideNavItem :openSideNav="true" iconString="WatchLater" />
                    <SideNavItem :openSideNav="true" iconString="Liked" />
                    <div class="text-gray-400 text-[14px] text-extrabold">
                        About Press Copyright
                        <div>Contact us</div>
                        Creator Advertise Developers
                    </div>
                    <div class="border-b border-b-gray-700 my-2.5"></div>
                    <div class="text-gray-400 text-[14px] text-extrabold">
                        Terms Privacy Policy & Safety
                        <div>How Youtube works</div>
                        <span>Test new features</span>
                    </div>
                </div>
            </ul>
        </div>
    </div>
</template>