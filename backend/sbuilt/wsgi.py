"""
WSGI config for sbuilt project.

It exposes the WSGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/4.0/howto/deployment/wsgi/
"""

from whitenoise import WhiteNoise
from django.core.wsgi import get_wsgi_application
import os
from pathlib import Path
BASE_DIR = Path(__file__).resolve().parent.parent

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'sbuilt.settings')
application = get_wsgi_application()
application = WhiteNoise(
    application, root=os.path.join(BASE_DIR, 'staticfiles'))
