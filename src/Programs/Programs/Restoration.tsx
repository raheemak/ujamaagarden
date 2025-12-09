import ImageCarousel from "../../shared/Carousel";

const RESTORATION_IMAGES = [
  "envrest.jpg",
  "envrest2.jpg",
  "envres3.jpg",
  "envrest4.jpg",
  "envres5.jpg",
  "envres6.jpg",
];

export const Restoration = () => {
  return (
    <div className="flex flex-col">
      <div className="w-full max-w-4xl mx-auto p-6">
        <h2 className="text-2xl font-bold mb-4">
          Environmental Conservation and Restoration Program
        </h2>
        <p className="mb-2">
          When we first began cleaning the lot that would become Ujamaa Garden,
          elders in the community shared with us how our project is connected to
          the vast Siwanoy Forest, which once covered the Wakefield neighborhood
          but was rapidly deforested in the past 50 years. Centering this
          wisdom, we shifted from an agricultural focus to an agroecological
          focus, intending not only to grow food for our benefit but to care for
          the natural habitat. As land stewards, we engage in hands-on and
          academic research about effective conservation practices and best
          methods to support the health of the ecosystem Ujamaa Garden is a part
          of. Through prioritizing Black and Indigenous techniques, we have
          grown a native pollinator garden, removed invasive species, identified
          trees and assessed their health, and are currently conducting a soil
          experiment by using phytoremediation and layering to readdress
          contaminated particles in the native soil. Partners include the Seton
          Falls Park Preservation Coalition, Cornell Cooperative Extension,
          Bronx Green-Up, and Xerces Society.
        </p>
      </div>
      <div className="relative w-screen overflow-hidden">
        <ImageCarousel
          images={RESTORATION_IMAGES.map((src) => `/restoration/${src}`)}
        />
      </div>
    </div>
  );
};
