import { Avatar, AvatarImage } from '@/components/ui/avatar'

export default function ReverseOrder({ imageUrls }: { imageUrls: string[] }) {
  return (
    <div className='flex flex-row-reverse justify-end -space-x-3 space-x-reverse *:ring *:ring-background'>
      {imageUrls.map((imageUrl: string) => (
        <Avatar>
          <AvatarImage src={imageUrl} />
        </Avatar>
      ))}
    </div>
  )
}
