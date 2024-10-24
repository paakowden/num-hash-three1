import Image from "next/image";

const page = () => {
  return (
    <div className="container py-10 grid grid-cols-2 md:grid-cols-4 gap-4">
      <div className="flex flex-col gap-4">
        <div>
          <Image
            className="h-auto max-w-full rounded-lg hover:scale-90 transition-all"
            src="/images/gallery11.jpg"
            width={500}
            height={200}
            alt=""
          />
        </div>
        <div>
          <Image
            className="h-auto max-w-full rounded-lg hover:scale-90 transition-all"
            src="/images/gallery.jpg"
            width={500}
            height={200}
            alt=""
          />
        </div>
        <div>
          <Image
            className="h-auto max-w-full rounded-lg hover:scale-90 transition-all"
            src="/images/gallery1.jpg"
            width={500}
            height={200}
            alt=""
          />
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div>
          <Image
            className="h-auto max-w-full rounded-lg hover:scale-90 transition-all"
            src="/images/gallery2.jpg"
            width={500}
            height={200}
            alt=""
          />
        </div>
        <div>
          <Image
            className="h-auto max-w-full rounded-lg hover:scale-90 transition-all"
            src="/images/gallery3.jpg"
            width={500}
            height={200}
            alt=""
          />
        </div>
        <div>
          <Image
            className="h-auto max-w-full rounded-lg hover:scale-90 transition-all"
            src="/images/gallery4.jpg"
            width={500}
            height={200}
            alt=""
          />
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div>
          <Image
            className="h-auto max-w-full rounded-lg hover:scale-90 transition-all"
            src="/images/gallery5.jpg"
            width={500}
            height={200}
            alt=""
          />
        </div>
        <div>
          <Image
            className="h-auto max-w-full rounded-lg hover:scale-90 transition-all"
            src="/images/gallery6.jpg"
            width={500}
            height={200}
            alt=""
          />
        </div>
        <div>
          <Image
            className="h-auto max-w-full rounded-lg hover:scale-90 transition-all"
            src="/images/gallery7.jpg"
            width={500}
            height={200}
            alt=""
          />
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div>
          <Image
            className="h-auto max-w-full rounded-lg hover:scale-90 transition-all"
            src="/images/gallery8.jpg"
            width={500}
            height={200}
            alt=""
          />
        </div>
        <div>
          <Image
            className="h-auto max-w-full rounded-lg hover:scale-90 transition-all"
            src="/images/gallery9.jpg"
            width={500}
            height={200}
            alt=""
          />
        </div>
        <div>
          <Image
            className="h-auto max-w-full rounded-lg hover:scale-90 transition-all"
            src="/images/gallery10.jpg"
            width={500}
            height={200}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default page;
