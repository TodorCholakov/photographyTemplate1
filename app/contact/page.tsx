import { Button } from "@nextui-org/react";

export default function Contact() {
  return (
    <div className="flex w-full justify-center">
      <div className=" w-[1024px] justify-left p-6 ">
        <div className="w-96 text-xl">
          <p className="paragrahB text-xl">
            Passionate traveler photographer capturing the world beauty through
            my lens. From breathtaking landscapes to candid moments, I freeze
            time to tell compelling visual stories. Let explore the globe
            together, one click at a time
          </p>
        </div>
        <form className="w-96 text-xl mt-4">
          <div className="mb-2 flex">
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">First name</span>
              </div>
              <input
                type="email"
                placeholder=""
                className="p-1 border input input-bordered w-64 mr-2"
              />
            </label>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Family name</span>
              </div>
              <input
                type="email"
                placeholder=""
                className="p-1 border input input-bordered w-64  ml-2"
              />
            </label>
          </div>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Email</span>
            </div>

            <input
              type="email"
              placeholder=""
              className="p-2 border input input-bordered w-full"
            />
          </label>
          <label className="form-control w-full mt-2">
            <div className="label">
              <span className="label-text ">Message</span>
            </div>
            <textarea
              className="w-full  textarea textarea-bordered border"
              placeholder="Bio"
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
