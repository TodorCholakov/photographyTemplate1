import { Button } from "@nextui-org/react";
import {pageAnimation} from "../../animation"


export default function Contact() {
  return (
    <div className="flex w-full justify-center">
      <div className=" w-[1024px] justify-left p-6  ">
        <div className="w-96 text-xl mb-8">
          <p className="paragrahB text-sm">
          Greetings! I'm here to bring your vision to life through personalized photography. Whether it's a special event, portrait session, or creative project, I'm all ears. Drop me a message below, and let's craft unforgettable moments together.
          </p>
        </div>
        <form className="max-w-xl text-sm mt-4 ">
          <div className="mb-2 flex flex-col justify-between md:flex-row">
          <label className="form-control w-full md:w-64 ">
              <div className="label">
                <span className="label-text">First name</span>
              </div>
              <input
                type="email"
                placeholder=""
                className="p-2 border input input-bordered w-full"
              />
            </label>
            <label className="form-control w-full md:w-64 ">
              <div className="label">
                <span className="label-text">Family name</span>
              </div>
              <input
                type="email"
                placeholder=""
                className="p-2 border input input-bordered w-full"
              />
            </label>
          </div>
          <div className="mb-2 flex">
          <label className="form-control w-full">
            <div className="label ">
              <span className="label-text">Email</span>
            </div>
            <input
              type="email"
              placeholder=""
              className="p-2 border input input-bordered w-full"
            />
          </label>
          </div>
          <label className="form-control w-full mt-2">
            <div className="label">
              <span className="label-text ">Message</span>
            </div>
            <textarea
              className="w-full  textarea textarea-bordered border"
              placeholder=""
            ></textarea>
          </label>
          <Button
            color="default"
            variant="bordered"
            radius="none"
            className="border mt-2 p-2 w-48"
          >
            Sent
          </Button>
        </form>
      </div>
    </div>
  );
}
