export default function Forms() {
    return (
        <>
            <form className="flex flex-col space-y-4">
                <div className="flex content-center border-b-[1px] space-x-3">
                    <label>Name:</label>
                    <input type="text" className="p-1 text-black bg-inherit" />
                </div>
                <div className="flex content-center border-b-[1px] space-x-3">
                    <label>Email:</label>
                    <input type="email" className="p-1 text-black bg-inherit" />
                </div>
                <div className="flex content-center border-b-[1px] space-x-3">
                    <label>Phone Number:</label>
                    <input type="tel" className="p-1 text-black bg-inherit" />
                </div>
                <div className="flex flex-col ">
                    <label>Write your post:</label>
                    <textarea name="postContent" className="p-1 text-black bg-inherit" rows={4} cols={40} />
                </div>
                <div className="flex justify-center items-center">
                    <button type="submit" className="py-2 px-4 rounded-full border-[1px] bg-inherit text-white hover:bg-gray-200 hover:text-green-700">Submit</button>
                </div>
            </form>
        </>
    )
}