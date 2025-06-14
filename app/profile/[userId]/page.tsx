import { getUser } from '@/actions/user'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { notFound } from 'next/navigation'
import SavedEvents from './SavedEvents'
import ParticipatingEvents from './ParticipatingEvents'

type Props = {
    params: {
        userId: string
    }
}

export default async function ProfilePage ({ params }: Props) {
    const user = await getUser(params.userId)
    console.log("userId: ",params.userId)

    if (!user) return notFound()

    const { name, email, image, saved_events = [], participating_events = [] } = JSON.parse(user)

    return (
        <section className='max-w-5xl mx-auto px-6 py-10'>
            <div className='flex flex-col sm:flex-row items-center sm:items-start gap-8 mb-10 border rounded-xl p-6 shadow-md bg-black-800/40'>
                <Avatar className='h-28 w-28'>
                    <AvatarImage src={image || ''} />
                    <AvatarFallback>{name?.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                    <h2 className='text-2xl font-semibold'>{name}</h2>
                    <p className='text-gray-300'>{email}</p>
                </div>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                <SavedEvents events={saved_events} />
                <ParticipatingEvents events={participating_events} />
            </div>
        </section>
    )
}
