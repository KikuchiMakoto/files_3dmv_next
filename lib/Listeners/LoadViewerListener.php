<?php

declare(strict_types=1);

namespace OCA\Files3dMvNext\Listeners;

use OCA\Files3dMvNext\AppInfo\Application;
use OCA\Viewer\Event\LoadViewer;
use OCP\EventDispatcher\Event;
use OCP\EventDispatcher\IEventListener;
use OCP\Util;

/**
 * @template-implements IEventListener<LoadViewer>
 */
class LoadViewerListener implements IEventListener {
    public function handle(Event $event): void {
        if (!$event instanceof LoadViewer) {
            return;
        }
        Util::addScript(Application::APP_ID, 'files_3dmv_next', 'viewer');
    }
}
