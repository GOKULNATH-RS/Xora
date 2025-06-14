'use client'
import { uploadToCloudinary } from '@/actions/uploadImage'
import { toast } from 'sonner'

const ImageUploader = ({
  setFunction
}: {
  setFunction: React.Dispatch<React.SetStateAction<string>>
}) => {
  async function handleImageUpload(e: any) {
    const toastId = toast.loading("Uploading image...")

    const file = e.target.files[0]
    const formData = new FormData()
    formData.append('file', file)
    uploadToCloudinary(file.name, formData).then((res) => {
      if (res.success) {
        setFunction(res.result?.secure_url as string)
        toast.success("Image uploaded",{ id: toastId })
      } else {
        toast.error("Error uploading image",{ id: toastId })
      } 
    }).catch((e)  => {
      toast.error("Error uploading image", { id: toastId })
    })
  }

  return (
    <div>
      <div>
        <label htmlFor='file-upload'>
          <div
            className={`min-h-[300px] w-full flex justify-center items-center border border-dashed border-opacity-20
                 'border-white bg-white'
              bg-opacity-5 hover:bg-opacity-10 rounded-xl`}
          >
            <div className='h-full w-full flex justify-center items-center flex-col opacity-35'>
              <svg
                className='w-8 h-8 mb-2 text-gray-500 dark:text-gray-400'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 20 16'
              >
                <path
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2'
                />
              </svg>
              <p className='text-md font-light'>Upload Event Logo</p>
            </div>
          </div>
          <input
            id='file-upload'
            type='file'
            className='hidden'
            onChange={(e) => handleImageUpload(e)}
          />
        </label>
      </div>
    </div>
  )
}

export default ImageUploader
