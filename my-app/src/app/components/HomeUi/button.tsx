import { clsx } from 'clsx';

type buttonProps = {
    title?: string,
    type?: string,
}

export default function Button({ title, type }: buttonProps ) {
    return (
        <button>
            <h1>Click me</h1>
        </button>
    )
}