/**
 * Global Type Declarations
 * Declare global types for third-party libraries (GLightbox, Swiper)
 */

interface GLightboxOptions {
  selector?: string;
  touchNavigation?: boolean;
  loop?: boolean;
  autoplayVideos?: boolean;
  zoomable?: boolean;
}

interface GLightbox {
  (options?: GLightboxOptions): void;
}

declare var GLightbox: GLightbox;

interface SwiperOptions {
  slidesPerView?: number | string;
  spaceBetween?: number;
  centeredSlides?: boolean;
  loop?: boolean;
  grabCursor?: boolean;
  speed?: number;
  preloadImages?: boolean;
  lazy?: object;
  pagination?: object;
  navigation?: object;
  breakpoints?: Record<number, SwiperOptions>;
}

declare class Swiper {
  constructor(selector: string | HTMLElement, options?: SwiperOptions);
}
