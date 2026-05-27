import Image from 'next/image';
import type { ReactNode } from 'react';

type Props = {
  title: string;
  description?: string;
  action?: ReactNode;
  className?: string;
};

export function EmptyState({ title, description, action, className }: Props) {
  return (
    <div
      className={[
        'flex flex-col items-center text-center gap-4 py-14 px-6 rounded-xl border border-dashed border-border bg-card/50',
        className ?? '',
      ].join(' ')}
    >
      <Image
        src="/assets/letter.png"
        alt=""
        width={88}
        height={88}
        className="opacity-70 select-none"
      />
      <div className="flex flex-col gap-1 max-w-sm">
        <p className="font-display text-xl tracking-tight">{title}</p>
        {description && (
          <p className="text-sm text-muted-foreground leading-relaxed">
            {description}
          </p>
        )}
      </div>
      {action}
    </div>
  );
}
