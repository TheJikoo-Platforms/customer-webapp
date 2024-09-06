import { Button } from "@/components/ui/button";
import { NotificationList } from '@/components/notification/notification-list'
export const Notifications = () => {
  return (
    <div className='lg:max-h-[463px] overflow-y-auto scrollbar-none'>
      <NotificationList/>
    </div>
  );
};
