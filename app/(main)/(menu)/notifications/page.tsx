import { Settings2 } from "lucide-react";
import { Notifications } from "@/components/notification/notifications";
import { PageBase } from "@/components/page-base";
import Link from "next/link";
import { FilterButton } from "@/components/filter-button";
import { NotificationFilterDrawer } from "@/components/notification/notification-filter-drawer";

export default function NotificationsPage() {
  return (
    <>
      <PageBase
        title="Notifications"
        pageAction={
          <>
            <FilterButton action={{ filter: "notification" }} />
          </>
        }
      >
        <div className="mt-3">
          <Notifications />
        </div>
      </PageBase>
      <NotificationFilterDrawer />
    </>
  );
}
