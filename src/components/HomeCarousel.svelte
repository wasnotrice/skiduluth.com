<script lang="ts">
  import * as Carousel from "./ui/carousel/index.js"
  import Autoplay from "embla-carousel-autoplay"
  import Fade from "embla-carousel-fade"
  import skylineParkway from "../media/skyline_parkway.jpg"
  import trailhead from "../media/Trailhead-28-Jan-18.jpg"
  import kidskiHillTop from "../media/kidski_hill_top.jpeg"

  type Image = {
     src: string;
     alt: string;
   };

   // Shuffle images so they vary by page load
   let unshuffled: [Image] = [
     {src: trailhead.src, alt: "Trailhead scene"},
     {src: skylineParkway.src, alt: "Skyline parkway"},
     {src: kidskiHillTop.src, alt: "Kidski skiers lined up at the top of the hill"}
   ];

   let images = unshuffled
       .map(value => ({ value, sort: Math.random() }))
       .sort((a, b) => a.sort - b.sort)
       .map(({ value }) => value);
</script>

{#snippet image({src, alt}: Image)}
  <Carousel.Item >
    <img src={src} alt={alt} class="w-screen aspect-wide object-cover object-center rounded-none">
  </Carousel.Item>
{/snippet}

<Carousel.Root class="w-full" plugins={[
  Autoplay({delay: 5000}),
  Fade()
]}>
  <Carousel.Content >
    {#each images as item}
      {@render image(item)}
    {/each}
  </Carousel.Content>
  <Carousel.Previous class="hidden" />
  <Carousel.Next class="hidden" />
</Carousel.Root>

<style>
    .aspect-wide {
        aspect-ratio: 3.5;
    }
</style>
