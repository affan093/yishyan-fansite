"use client";

import { useCallback, useEffect, useState } from "react";

const STORAGE_KEY = "yishyan-fansite-checklist";

export function useChecklist() {
  const [checked, setChecked] = useState<Set<string>>(new Set());
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw) as string[];
        setChecked(new Set(parsed));
      }
    } catch {
      /* ignore corrupt storage */
    }
    setHydrated(true);
  }, []);

  const persist = useCallback((next: Set<string>) => {
    setChecked(next);
    localStorage.setItem(STORAGE_KEY, JSON.stringify([...next]));
  }, []);

  const toggle = useCallback(
    (id: string) => {
      setChecked((prev) => {
        const next = new Set(prev);
        if (next.has(id)) next.delete(id);
        else next.add(id);
        localStorage.setItem(STORAGE_KEY, JSON.stringify([...next]));
        return next;
      });
    },
    []
  );

  const clearAll = useCallback(() => {
    persist(new Set());
  }, [persist]);

  const isChecked = useCallback((id: string) => checked.has(id), [checked]);

  return { checked, toggle, clearAll, isChecked, hydrated, totalChecked: checked.size };
}
