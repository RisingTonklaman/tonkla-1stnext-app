interface TextErrorProps {
  message: string;
}

export default function TextError({ message }: TextErrorProps) {
  return <div className="mt-2 text-red-500 text-center text-sm">{message}</div>;
}
