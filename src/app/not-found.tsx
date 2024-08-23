import LinkToButton from './components/linkToButton';

export default function NotFound() {
  return (
    <div className="h-[80vh] text-center p-10 space-y-10">
      <h2 className="text-3xl">Not Found</h2>
      <p>Could not find requested resource</p>
      <div className="inline-block">
        <LinkToButton href="/">Return Home</LinkToButton>
      </div>
    </div>
  );
}
