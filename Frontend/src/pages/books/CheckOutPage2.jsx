import React from 'react'

const CheckOutPage2 = () => {
  return (
    <section>
      <div className="flex items-center flex-col justify-center bg-[#f3f4f6] min-h-screen p-6">
        <div className="container max-w-screen-lg mx-auto">
          <div>
            <div className="">
              <h3>Cash on delivery</h3>
              <p>Total Price: $0.00</p>
              <p>Items:0</p>
            </div>
            <div className=" bg-white p-4 md:p-8 mb-6  rounded shadow-lg">
              <div> 
                <h3>Personal Details:</h3>
                <p>Please fill out all the fields.</p>
              </div>
              <div>
                <form className="grid gap-4 gap-y-2 grid-col-1 lg:gride-col-3 ">
                  <label htmlFor="">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    className="bg-[#f3f4f6] rounded"
                  />
                  <label htmlFor="">Email Address</label>
                  <input
                    type="email"
                    name="name"
                    className="bg-[#f3f4f6] rounded"
                  />
                  <label htmlFor="">Phone Number</label>
                  <input
                    type="text"
                    name="name"
                    className="bg-[#f3f4f6] rounded"
                  />
                  <label htmlFor="">Address / Street</label>
                  <input
                    type="text"
                    name="name"
                    className="bg-[#f3f4f6] rounded"
                  />
                  <label htmlFor="">City</label>
                  <input
                    type="text"
                    name="name"
                    className="bg-[#f3f4f6] rounded"
                  />
                  <label htmlFor="">Country / region</label>
                  <input
                    type="text"
                    name="name"
                    className="bg-[#f3f4f6] rounded"
                  />
                  <label htmlFor="">State / province</label>
                  <input
                    type="text"
                    name="name"
                    className="bg-[#f3f4f6] rounded"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CheckOutPage2