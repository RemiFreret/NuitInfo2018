package com.nuitdelinfo.tl_assistance;

import android.app.Service;
import android.content.Intent;
import android.os.IBinder;

public class MainService extends Service {
    public MainService() {
    }
on
    @Override
    public IBinder onBind(Intent intent) {
        // TODO: Return the communication channel to the service.
        throw new UnsupportedOperationException("Not yet implemented");
    }
}
