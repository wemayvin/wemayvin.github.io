<template>
  <div>
    <Header :weddingInfo="weddingInfo" />
    <InvitationMessage :weddingInfo="weddingInfo" />
    <Contact :weddingInfo="weddingInfo" />
    <Calendar :weddingInfo="weddingInfo" />
    <Gallery :weddingInfo="weddingInfo" />
    <Location :weddingInfo="weddingInfo" />
    <SnsShare :weddingInfo="weddingInfo" />
  </div>
</template>

<script>
import HeaderVue from "./Header.vue";
import InvitationMessageVue from "./InvitationMessage.vue";
import ContactVue from "./Contact.vue";
import CalendarVue from "./Calendar.vue";
import GalleryVue from "./GridGallery.vue";
import LocationVue from "./Location.vue";
import SnsShareVue from "./SnsShare.vue";

export default {
  props: ["weddingInfo"],

  components: {
    Header: HeaderVue,
    InvitationMessage: InvitationMessageVue,
    Contact: ContactVue,
    Calendar: CalendarVue,
    Gallery: GalleryVue,
    Location: LocationVue,
    SnsShare: SnsShareVue
  }
};
</script>