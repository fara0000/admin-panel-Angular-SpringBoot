package com.application.mbeans;

import org.springframework.jmx.export.annotation.ManagedAttribute;
import org.springframework.jmx.export.annotation.ManagedOperation;
import org.springframework.jmx.export.annotation.ManagedResource;
import org.springframework.stereotype.Component;

import javax.management.Notification;
import javax.management.NotificationBroadcasterSupport;

import java.util.concurrent.atomic.AtomicLong;

@ManagedResource
@Component
public class PointCounterMBean extends NotificationBroadcasterSupport {
    private int pointCount = 0;
    private int hitCount = 0;

    private final AtomicLong notificationSequence = new AtomicLong();

    @ManagedOperation
    public void count(boolean income) {
        if (income) hitCount++;
        else this.trigger();
        pointCount++;
    }

    @ManagedAttribute
    public int getHitCount() {
        return hitCount;
    }

    @ManagedAttribute
    public int getPointCount() {
        return pointCount;
    }

    @ManagedOperation
    public void trigger() {
        System.out.println("Sending notification");
        Notification notification = new Notification(
                "UserMissed", this, notificationSequence.incrementAndGet(),
                System.currentTimeMillis(), "You missed again"
        );
        this.sendNotification(notification);
    }

    public void clear () {
        this.pointCount = 0;
        this.hitCount = 0;
    }
}
