type Props = {
  params: {
    id: string
  }
}

export default function EventDetails({ params }: Props) {
  const { id } = params

  return <div>EventDetails of {id}</div>
}
